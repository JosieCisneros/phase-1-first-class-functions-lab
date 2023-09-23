const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice (0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice (2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fareMultiplier) {
    return function (number) {
        return fareMultiplier * number
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (arrayOfDrivers, funct) {
    return funct(arrayOfDrivers)
}