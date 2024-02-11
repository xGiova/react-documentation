 const [tags, setTags] = useState(["happy", "cheerful"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // Update Arrays

    // Add
    setTags([...tags, "exciting"]);
    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    // Update Array of Objects
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // Update Array of Objects with Immer
    // draft is a proxy object that records the changes that we are going to apply to the array desired.
    // draft is a copy to draft array, so we are free to mutate or modify.
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true; // if bug is true, we update the boolean expression to true.
    })
  };
