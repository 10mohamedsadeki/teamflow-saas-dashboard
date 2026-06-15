export const useFilter = (data, search, statu, searchKey, statuKey) => {
  const filteredTeams = data.filter((item) => {
    const matchSearch = item[searchKey].toLowerCase().includes(search.toLowerCase());
    const matchStatu =
      statu === "All" ? true : item[statuKey].toLowerCase() === statu.toLowerCase();
    return matchSearch && matchStatu;
  });

  return filteredTeams;
};
