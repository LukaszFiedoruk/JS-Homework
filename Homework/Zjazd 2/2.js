let day= new Date('5 November, 2022');
let days = day.getDay();

    switch (days) {
        case 0:
            console.log("It's Sunday and left 5 days till Friday.");
            break;
        case 1:
            console.log("It's Monday and left 4 days till Friday.");
            break;
        case 2:
            console.log("It's Tuesday and left 3 days till Friday.");
            break;
        case 3:
            console.log("It's Wednesday and left 2 days till Friday.");
            break;
        case 4:
            console.log("It's Thursday and left 1 days till Friday.");
            break;
        case 5:
            console.log("It's Friday day.");
            break;
        default:
        console.log("It's Saturday and left 6 days till Friday.");
        }    

        


