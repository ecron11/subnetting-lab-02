

//checks the answer based on user input


//This function takes a number of hosts, and the amount of network bits and returns a string
//representing the CIDR Notation that is calculated.
export function findCIDRNotation(numHosts, networkBits) {
    let finalCIDR = "";
    let hostBits = findHostBits(numHosts+2, 1);
    let subnetBits = 32 - hostBits;
    finalCIDR = "/" + subnetBits;
    return finalCIDR
}

//This is a recursivce function that finds the number for CIDR notation. 
//It checks if the number is less than 2 to the power of the index. This will find how many bits are needed
//for the hosts address. This does NOT account for the broadcast and network ID. Those must be passed in.
function findHostBits (number, index) {
    //prevents endless loop if incorrect index passed in.
    if (index < 0) {
        return -1;
    }

    //recursive function call
    if (number <= Math.pow(2, index)) {
        return index;
    } else {
        index += 1;
        return findHostBits(number, index);
    }
}