class Validator {
    isEmail(email) {
        let regex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        if (email.match(regex)) {
            return true;
        }
        return false;
    }

    isDomain(domain) {
        let regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        if (domain.match(regex)) {
            return true;
        }
        return false;
    }

    isDate(date) {
        let regex = /(((0[1-9]|[12]\d|3[01])\.(0[13578]|1[02])\.((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\.(0[13456789]|1[012])\.((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\.02\.((19|[2-9]\d)\d{2}))|(29\.02\.((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
        if (date.match(regex)) {
            return true;
        }
        return false;
    }

    isPhone(phone) {
        let regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if (phone.match(regex)) {
            return true;
        }
        return false;
    }
}

class ValidatorStatic {
    static isEmail(email) {
        let regex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        if (email.match(regex)) {
            return true;
        }
        return false;
    }

    static isDomain(domain) {
        let regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        if (domain.match(regex)) {
            return true;
        }
        return false;
    }

    static isDate(date) {
        let regex = /(((0[1-9]|[12]\d|3[01])\.(0[13578]|1[02])\.((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\.(0[13456789]|1[012])\.((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\.02\.((19|[2-9]\d)\d{2}))|(29\.02\.((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
        if (date.match(regex)) {
            return true;
        }
        return false;
    }

    static isPhone(phone) {
        let regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if (phone.match(regex)) {
            return true;
        }
        return false;
    }
}

//стандартная вызывается вот так
var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

//а статическая так
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));