const pic1 = {
    name: 'A',
    url: 'https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg'
};
const pic2 = {
    name: 'B',
    url: 'https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg'
};
const pic3 = {
    name: 'C',
    url: 'https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg'
};
const pic4 = {
    name: 'D',
    url: 'https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg'
};
const pic5 = {
    name: 'E',
    url: 'https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg'
};
let pictures = [pic1, pic2, pic3, pic4, pic5];

let observers = [];

function emitChange() {
    observers.forEach((o) => o && o(pictures));
}

export function observe(o) {
    observers.push(o);
    emitChange()
    return () => {
        observers = observers.filter((t) => t !== o)
    }
}

export function movePicture(from, to) {
    if (window.confirm('Do you want to replace Image '+to+' for image '+from+'?')) {
        const fromIndex = pictures.map(e => e.name).indexOf(from);
        const toIndex = pictures.map(e => e.name).indexOf(to);
        pictures = [...pictures];
        [pictures[fromIndex], pictures[toIndex]] = [pictures[toIndex], pictures[fromIndex]];
        emitChange();
    }
}
