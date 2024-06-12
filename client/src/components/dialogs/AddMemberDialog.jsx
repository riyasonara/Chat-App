/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElem) => currElem !== id)
        : [...prev, id]
    );
  };
  console.log(selectedMembers);

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  };
  const addMemberSubmitHandler = (e) => {
    e.preventDefault();
    closeHandler();
    // addMember(chatId);
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack width={"20rem"} p={"2rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem
                key={i._id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" variant="outlined" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            onClick={addMemberSubmitHandler}
            disabled={isLoadingAddMember}
            variant="contained"
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
