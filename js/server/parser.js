const { camelCase } = require("lodash");
const parser = require("xml2json");

function getUmlFile(data) {
  const umlObj = JSON.parse(parser.toJson(data));
  const relations = Object.fromEntries(
    umlObj["od:odBoard"]["od:link"].map(({ id, sourceRef, targetRef }) => [
      targetRef,
      { id, sourceRef, targetRef }
    ])
  );
  const classes = Object.fromEntries(
    umlObj["od:odBoard"]["od:object"].map(({ id, name, attributeValues }) => [
      id,
      {
        id,
        name,
        attributeValues: attributeValues
          .split("\n")
          .map(attr => ({ value: attr }))
      }
    ])
  );
  Object.keys(classes).map(classId => {
    Object.keys(relations)
      .filter(relationId => relationId === classId)
      .forEach(relationId => {
        relation = relations[classId];
        classes[classId].attributeValues.push({
          value: `${camelCase(classes[relation.sourceRef].name)}:${
            classes[relation.sourceRef].name
          }`,
          import: classes[relation.sourceRef].name
        });
      });
  });
  return classes;
}

module.exports = {
  getUmlFile
};
