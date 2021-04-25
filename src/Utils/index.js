const utils = {
    getNumber: (number) => {
        let result=0;
        if(number>=1000 && number<1000000) {
            result = number/1000;
            result = utils.round(result, 1);
            return `${result} K`;
        }
        if(number>=1000000){
            result = number/1000000;
            result = utils.round(result, 1);
            return `${result} M`;
        }
        return number;
    },
    getHashtagFromPost: (posts) => {
        let aux = [];
        for(let i=0;i<posts.length;i++){
            let aux2 = posts[i].caption.split('#');
            aux = [...aux, aux2];
        }
        return aux;
    },
    round: (num, decimales = 2) => {
        var signo = (num >= 0 ? 1 : -1);
        num = num * signo;
        if (decimales === 0) //con 0 decimales
            return signo * Math.round(num);
        // round(x * 10 ^ decimales)
        num = num.toString().split('e');
        num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
        // x * 10 ^ (-decimales)
        num = num.toString().split('e');
        return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
    },
    formatDate: (date) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        let dateToReturn;
        try {
            let newDate = new Date(date.split(/.[0-9]*Z/)[0]);
            let hour = parseInt(date.split('T')[1].split(':')[0])
            let hours = (hour>12)?(hour-12):hour;
            dateToReturn = `${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()} ${hours}:${newDate.getMinutes()} ${(hour>12)?'PM':'AM'}`;
        } catch (error) {
            dateToReturn = '';
        }
        return dateToReturn;
    },
    replaceAll: (string, search, replace) => {
        if (string === null) return "";
        return string.split(search).join(replace);
    }
}

export default utils;