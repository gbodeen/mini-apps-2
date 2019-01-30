const valiDate = (date) => {
  if (date.length !== 8) return false;
  // let dashes = date[4] + date[7];
  // if (dashes !== '--') return false;
  let year = parseInt(date.slice(0, 4));
  if (Number.isNaN(year) || year < 2000 || year > 2020) return false;
  let month = parseInt(date.slice(4, 6));
  if (Number.isNaN(month) || month < 1 || month > 12) return false;
  let day = parseInt(date.slice(6));
  if (Number.isNaN(day) || day < 1 || day > 31) return false;

  return true;
}

const inOrder = (date1, date2) => {
  let year1 = date1.slice(0, 4);
  let year2 = date2.slice(0, 4);
  if (year1 < year2) return true;
  if (year1 > year2) return false;
  let month1 = date1.slice(4, 6);
  let month2 = date2.slice(4, 6);
  if (month1 < month2) return true;
  if (month1 > month2) return false;
  let day1 = date1.slice(6);
  let day2 = date2.slice(6);
  if (day1 <= day2) return true;
  else return false;
}

module.exports = {
  valiDate,
  inOrder
}