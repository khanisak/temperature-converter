import _ from 'lodash'

const fruits = [
    'apple',
    'grape',
    'orange',
    'banana',
    'blueberry'
]

const findIndexofBanana = () => {
    let index = _.indexOf(fruits, 'banana');
    return index;
}

console.log(findIndexofBanana());