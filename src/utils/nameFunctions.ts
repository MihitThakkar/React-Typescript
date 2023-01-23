const nameFunctions = {
  getCompactName: (name: string) => {
    if (!name) return "";
    if (name?.length > 15 && name?.includes(" ")) {
      const nameSplit = name.split(" ");
      const lastName = nameSplit[nameSplit.length - 1];
      nameSplit.pop();
      let partialName = "";
      nameSplit.map((item) => {
        partialName += ` ${item[0]}`;
      });
      partialName = `${partialName} ${lastName}`;
      return partialName.trim();
    }
    return name;
  },
  getFirstName: (name: string) => {
    if (!name) return "";
    if (name?.includes(" ")) {
      const nameSplit = name.split(" ");
      const firstName = nameSplit[0];
      const lastName = nameSplit[nameSplit.length - 1];
      return firstName?.length > 3 ? firstName : lastName;
    }
    return name;
  },
  getIconName: (name: string) => {
    if (!name) return "";
    const nameSplit = name.split(" ");
    if (nameSplit.length > 1 && nameSplit[1]) {
      let partialName = `${nameSplit[0][0] || ""}${nameSplit[1][0] || ""}`;
      return partialName.toUpperCase() || "";
    }
    return name[0]?.toUpperCase() + (name[1]?.toUpperCase() || "");
  },
  getLastFourChar: (string: string) => {
    return string?.substr(string.length - 4);
  },
};

export default nameFunctions;
