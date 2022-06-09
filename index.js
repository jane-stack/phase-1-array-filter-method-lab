function findMatching(drivers, str) {
    const result = drivers.filter(drivers => drivers.toUpperCase() === str.toUpperCase());
    return result;
}

function fuzzyMatch(drivers, str) {
    const result = drivers.filter(drivers => drivers.startsWith(str));
    return result;
}

function matchName(drivers, str) {
    const result = drivers.filter(function(drivers) {
        for (let driver in drivers) {
            if (drivers.name === str || drivers.hometown === str)
            return driver;
        }
    })
    return result;
}

function matchName(drivers, str) {
    const result = drivers.filter((drivers) => {
        for (let driver in drivers) {
            if (drivers.name === str || drivers.hometown === str)
            return driver;
        }
    })
    return result;
}
