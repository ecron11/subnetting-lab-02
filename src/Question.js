import React from 'react'

export default function Question() {
    return (
        <div>
            <p className="p-2 lead text-center">Please Enter the CIDR notation for each organization group. 
            Each group's CIDR notation should represent the minimum size subnet that can contain all of the hosts. 
            The exception to this is the remaining IPs wihch must represent the largest subnet possible with the remaining IP addresses.</p>
        </div>
    )
}
