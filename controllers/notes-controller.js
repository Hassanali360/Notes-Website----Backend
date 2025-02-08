const Note = require("../Models/notes-model.js");

const addnotes = async (req, res) => {
  try {
    const { title, content, tags, userId } = req.body; // Ensure userId is provided

    if (!title || !content || !tags || !userId) {
      return res.status(400).json({ message: "ALL FIELDS ARE NECESSARY" });
    }

    const createNote = new Note({
      title,
      content,
      tags: tags || [], // Default empty array if tags is undefined
      userId,
    });

    await createNote.save(); // Save the created note instance
    return res.status(201).json({ message: "Note has been added successfully" });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params; // Extracting id from URL parameters

    if (!id) {
      return res.status(400).json({ message: "Note ID is required" });
    }

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note has been deleted successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Error in deleting the note" });
  }
};


const updatenotes = async (req,res) => {
  try{
    const {id} = req.params;
    const {title, content,tags} = req.body;

    const existingNotes = await Note.findById(id);
    if(!existingNotes){
      return res.status(404).json({message: "Note not fouond"});
    }

    const update = await Note.findByIdAndUpdate(
      id,
      {title, conten,tags},
      {new: true, runValidator:true}
    );

 return res.status(200).json({message: "Notes Updated Successfully"});

  }catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Error in deleting the note" });
  }
}


module.exports = {addnotes, deleteNotes,updatenotes};
