const useRelationIDs = (data, id, name, fatherId) => {
  const relation = {0: {}};
  data.map(x => {
    const newRow = name(x);

    relation[0] = {
      ...relation[0],
      [id(x)] : newRow
    }

    if (!relation[fatherId(x)]) {
      relation[fatherId(x)] = {
        [id(x)] : newRow
      } 
    } else {
      relation[fatherId(x)] = {
        ...relation[fatherId(x)],
        [id(x)] : newRow
      }
    }
  })
  return relation;
}

export default useRelationIDs;