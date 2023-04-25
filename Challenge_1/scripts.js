const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.querySelector("#book1")
const status1 = book1.querySelector(".status")
const reserve1 = book1.querySelector(".reserve")
const checkout1 = book1.querySelector(".checkout")
const checkin1 = book1.querySelector(".checkin")


checkin1.style.color = "black"
status1.style.color = STATUS_MAP.overdue.color
2
// reserve1 = STATUS_MAP.status.canReserve === "true" ? 'enabled' : 'disabled';
// checkout1 = STATUS_MAP.status.canCheckout === "true" ? 'enabled' : 'disabled';
// checkin1 = STATUS_MAP.status.canCheckIn === "true" ? 'enabled' : 'disabled';

const book2 = document.querySelector('#book2');
const status2 = book2.querySelector(".status")
const reserve2 = book2.querySelector('.reserve');
const checkout2 = book2.querySelector('.checkout');
const checkin2 = book2.querySelector('.checkin');

checkin2.style.color = ""
status2.style.color = STATUS_MAP.reserved.color
// reserve1 = STATUS_MAP.status.canReserve === "true" ? 'enabled' : 'disabled';
// checkout1 = STATUS_MAP.status.canCheckout === "true" ? 'enabled' : 'disabled';
// checkin1 = STATUS_MAP.status.canCheckIn === "true" ? 'enabled' : 'disabled';


const book3 = document.querySelector('#book3');
const status3 = book3.querySelector(".status")
const reserve3 = book3.querySelector('.reserve');
const checkout3 = book3.querySelector('.checkout');
const checkin3 = book3.querySelector('.checkin');


checkin3.style.color = ""
status3.style.color = STATUS_MAP.shelf.color 
// reserve2 = STATUS_MAP.status.canReserve === "true" ? 'enabled' : 'disabled';
// checkout2 = STATUS_MAP.status.canCheckout === "true" ? 'enabled' : 'disabled';
// checkin2 = STATUS_MAP.status.canCheckIn === "true" ? 'enabled' : 'disabled';









// const firstRoot = document.getElementById('book1')
// const firstStatus = firstRoot.getElementsByClassName('status')[0]
// const  firstReserve = firstRoot.getElementsByClassName('reserve')[0]
// const firstCheckout = firstRoot.getElementsByClassName('checkout')[0] 
// const firstCheckin = firstRoot.getElementsByClassName('checkin')[0]


// const secondRoot = document.getElementById('book2')
// const secondStatus = secondRoot.getElementsByClassName('status')[0]
// const secondReserve = secondRoot.getElementsByClassName('reserve')[0]
// const secondCheckout = secondRoot.getElementsByClassName('checkout')[0]
// const secondCheckin = secondRoot.getElementsByClassName('checkin')[0]


// const thirdRoot = document.getElementById('book3')
// const thirdStatus = thirdRoot.querySelector('.status')
// const thirdReserve = thirdRoot.querySelector('.reserve')
// const thirdCheckout = thirdRoot.querySelector('.checkout')
// const thirdCheckin = thirdRoot.querySelector('.checkin')



// firstCheckin.style.color = ''
// firstStatus.style.color = STATUS_MAP.overdue.color
// // firstReserve = STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled'
// // firstCheckout = STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled'
// // firstCheckin = STATUS_MAP.overdue.canCheckIn === 'true' ? 'enabled' : 'disabled'

// secondCheckin.style.color = ''
// secondStatus.style.color = STATUS_MAP.reserved.color
// // console.log(secondStatus.style.color)
// // const secondReserveStatus = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
// // const secondCheckoutStatus = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
// // const secondCheckinStatus = STATUS_MAP.reserved.canCheckIn ? 'enabled' : 'disabled'

// thirdCheckin.style.color = ''
// thirdStatus.style.color = STATUS_MAP.shelf.color
// // const thirdReserveStatus = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled'
// // const thirdCheckoutStatus = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
// // const thirdCheckinStatus = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled'
