    const array=[1,3,5,7,9]
    const observables = of(array);
    observables.subscribe(values => console.log(values), () => console.log("...odds streamed")) 
