    for(let i = 0; i <= 10; i++){ // (initialisation; condition; incrémentation)
        console.log(i);
    }
    
    let L = [1, 2, 3, 4, 5];
    L.forEach(e => console.log(e));

    let i = 0;
    while(i <= 10){
        console.log(i);
        i++;
    }

    let j = 0;
    do{
        console.log(j);
        j++;
    }
    while(j <= 10);

    let List = [1, 2, 3, 4, 5];
    for(let e of List){
        console.log(e);
    }

    let obj = {a: 1, b: 2, c: 3};
    for(let e in obj){
        console.log(e);
    }

    const Colors = {
        RED: 'red',
        GREEN: 'green',
        BLUE: 'blue'
    };

    const getColor = (color) => {
        switch(&    ) {
            case Colors.RED:
                return 'This is red';
            case Colors.GREEN:
                return 'This is green';
            case Colors.BLUE:
                return 'This is blue';
            default:
                return 'Unknown color';
        }
    };

    console.log(getColor(Colors.RED)); // Output: This is red
    console.log(getColor(Colors.GREEN)); // Output: This is green
    console.log(getColor(Colors.BLUE)); // Output: This is blue

    console.log(Colors.RED); // Output: red
