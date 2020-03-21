module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    let arrOfNumberMembers = number.toString().split('').reverse();
    let humanReadable = '';

    for (let i = 0; i < arrOfNumberMembers.length; i++) {
        switch (i) {
            case 0:
                humanReadable = nameUnits(humanReadable, arrOfNumberMembers[0]);
                break;
            case 1:
                humanReadable = nameDozens(humanReadable, arrOfNumberMembers[1], arrOfNumberMembers[0]);
                break;
            case 2:
                humanReadable = nameHundreds(humanReadable, arrOfNumberMembers[2]);
                break;
            default:
                break;
        }
    }
    function nameUnits(humanReadable, unitsValue) {
        switch (unitsValue) {
            case '0':
                break;
            case '1':
                humanReadable = 'one';
                break;
            case '2':
                humanReadable = 'two';
                break;
            case '3':
                humanReadable = 'three';
                break;
            case '4':
                humanReadable = 'four';
                break;
            case '5':
                humanReadable = 'five';
                break;
            case '6':
                humanReadable = 'six';
                break;
            case '7':
                humanReadable = 'seven';
                break;
            case '8':
                humanReadable = 'eight';
                break;
            case '9':
                humanReadable = 'nine';
                break;
        }
        return humanReadable;
    }

    function nameDozens(humanReadable, dozensValue, unitsValue) {
        switch (dozensValue) {
            case '0':
                break;
            case '1':
                switch (unitsValue) {
                    case '0':
                        humanReadable = 'ten';
                        break;
                    case '1':
                        humanReadable = 'eleven';
                        break;
                    case '2':
                        humanReadable = 'twelve';
                        break;
                    case '3':
                        humanReadable = 'thirteen';
                        break;
                    case '4':
                        humanReadable = 'fourteen';
                        break;
                    case '5':
                        humanReadable = 'fifteen';
                        break;
                    case '6':
                        humanReadable = 'sixteen';
                        break;
                    case '7':
                        humanReadable = 'seventeen';
                        break;
                    case '8':
                        humanReadable = 'eighteen';
                        break;
                    case '9':
                        humanReadable = 'nineteen';
                        break;
                }
                break;
            case '2':
                humanReadable = 'twenty ' + humanReadable;
                break;
            case '3':
                humanReadable = 'thirty ' + humanReadable;
                break;
            case '4':
                humanReadable = 'forty ' + humanReadable;
                break;
            case '5':
                humanReadable = 'fifty ' + humanReadable;
                break;
            case '6':
                humanReadable = 'sixty ' + humanReadable;
                break;
            case '7':
                humanReadable = 'seventy ' + humanReadable;
                break;
            case '8':
                humanReadable = 'eighty ' + humanReadable;
                break;
            case '9':
                humanReadable = 'ninety ' + humanReadable;
                break;
        }
        return humanReadable;
    }

    function nameHundreds(humanReadable, hundredsValue) {
        switch (hundredsValue) {
            case '0':
                break;
            case '1':
                humanReadable = 'one hundred ' + humanReadable;
                break;
            case '2':
                humanReadable = 'two hundred ' + humanReadable;
                break;
            case '3':
                humanReadable = 'three hundred ' + humanReadable;
                break;
            case '4':
                humanReadable = 'four hundred ' + humanReadable;
                break;
            case '5':
                humanReadable = 'five hundred ' + humanReadable;
                break;
            case '6':
                humanReadable = 'six hundred ' + humanReadable;
                break;
            case '7':
                humanReadable = 'seven hundred ' + humanReadable;
                break;
            case '8':
                humanReadable = 'eight hundred ' + humanReadable;
                break;
            case '9':
                humanReadable = 'nine hundred ' + humanReadable;
                break;
        }
        return humanReadable;
    }

    return humanReadable.trim();  
}
