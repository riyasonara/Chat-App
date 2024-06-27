import { useInputValidation } from "6pp";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { useEffect, useState } from "react";
import { sampleUsers } from "../../constants/SampleData";
import { useDispatch, useSelector } from "react-redux";
import { setIsSearch } from "../../redux/reducers/misc";
import { useLazySearchUserQuery } from "../../redux/api/api";

const users = [1, 2, 3];
let isLoadingSendFriendRequest = false;

const SearchBar = () => {
  const { isSearch } = useSelector((state) => state.misc);

  const [searchUser] = useLazySearchUserQuery();

  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const search = useInputValidation("");
  const addFriendHandler = (id) => {
    console.log(id);
  };
  const closeSearchHandler = () => {
    dispatch(setIsSearch(false));
  };

  useEffect(() => {
    const TimeOutId = setTimeout(() => {
      searchUser(search.value)
        .then(({ data }) => setUsers(data.users))
        .catch((e) => console.log(e));
    }, 500);
    return () => {
      clearTimeout(TimeOutId);
    };
  }, [search.value]);

  return (
    <Dialog open={isSearch} onClose={closeSearchHandler}>
      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default SearchBar;
