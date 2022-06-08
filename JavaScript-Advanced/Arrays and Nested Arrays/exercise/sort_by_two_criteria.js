function sortArray(array){
    array.sort(twoCriteriaSort);

    function twoCriteriaSort(current, next){
        if(current.length == next.length) {
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }

    console.log(array.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma']);