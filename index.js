// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()));
}

function fuzzyMatch(drivers, prefix) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(prefix.toLowerCase()));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}


