let notes = [
  {
    id: 1,
    title: "Learn Express"
  },
  {
    id: 2,
    title: "Build API"
  }
];

const getNotes = (req, res) => {

  res.json(notes);

};

const createNote = (req, res) => {

  const newNote = {
    id: Date.now(),
    title: req.body.title
  };

  notes.push(newNote);

  res.json(newNote);

};

const deleteNote = (req, res) => {

  const noteId = Number(req.params.id);

  notes = notes.filter((note) => {

    return note.id !== noteId;

  });

  res.json({
    message: "Note deleted"
  });

};

const updateNote = (req, res) => {

  const noteId = Number(req.params.id);

  const updatedTitle = req.body.title;

  notes = notes.map((note) => {

    if(note.id === noteId){

      return {
        ...note,
        title: updatedTitle
      };

    }

    return note;

  });

  res.json({
    message: "Note updated"
  });

};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
  updateNote
};