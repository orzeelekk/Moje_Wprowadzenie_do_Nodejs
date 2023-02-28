function myFavoriteCartoon(age) {
    return new Promise((resolve,reject) => {
        if (age >= 18) {
            reject(
                new Error("Proponowane filmy sa dla dzieci")
            );
        }
        if (age === undefined) {
            reject(
                new Error("Podaj wiek")
            );
        }
        if (age < 18) {
            resolve (
                ['Kot w butach', 'Shrek']
            );
        }
    })
}
myFavoriteCartoon(92)
myFavoriteCartoon(12)
myFavoriteCartoon()
