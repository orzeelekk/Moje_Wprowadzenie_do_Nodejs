![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Strumień odczytu, porównanie readFile i readStream

Zobacz dwa pliki: **'readFile.js'** oraz **'readStream.js'**. Oba te programy robią to samo: logują zawartość pliku 'source.txt' do konsoli. Różni się natomiast sposób w jaki to robią. 'readFile.js' korzysta z fs.readFile() co sprawia, że cały plik jest wczytany zanim zostanie wylogowany. Natomiast 'readStream.js' odczytuje plik w małych kawałkach. Zapoznaj się z kodem w obu plikach, uruchom je i zobacz różnice.

Zwróć uwagę na zmienną count, która jest zadeklarowana w obu plikach.

```javascript
let count = 0
```

W tej zmiennej trzymana jest ilość odczytów z pliku.

## Komendy do uruchomienia:
Aby uruchomić program wpisz readFile wpisz: 

```bash
node readFile
```
Aby uruchomić program wpisz readStream wpisz: 
```bash
node readStream
```
Jeśli chcesz aby program się uruchomił w trybie _watch_ (program będzie uruchamiany za każdym razem kiedy zostanie zmieniony i zapisany) wpisz:
```bash
npm install
```
aby zainstalować zależności z pliku package.json. A następnie:
```bash
npm run start:readFile
```
Aby wyjść z trybu watch wciśnij Ctrl + C.<br>
Aby uruchomić plik readStream w trybie watch wpisz:
```bash
npm run start:readStream
```


## Strumień zapisu

W folderze znajduje się plik 'writeStream.js'. Przeczytaj kod i postaraj się przewidzieć co on robi. Następnie uruchom program i zobacz jaki jest wynik. Dowolnie zmodyfikuj wartość zmiennej 'yourCustomMessage' i uruchom ponownie program.

## Komendy do uruchomienia:
Aby uruchomić program wpisz:
```bash
node writeStream
```
Jeśli chcesz aby program się uruchomił w trybie _watch_ (program będzie uruchamiany za każdym razem kiedy zostanie zmieniony i zapisany) wpisz:
```bash
npm install
```
aby zainstalować zależności z pliku package.json. A następnie:
```bash
npm run start:writeStream
```
Aby wyjść z trybu watch wciśnij Ctrl + C.

## Przekazywanie strumienia odczytu do strumienia zapisu

Na podstawie programów z poprzednich zadań stwórz program w pliku 'inputToOutput.js', który odczyta strumieniowo plik 'target.txt' a następnie zapisze go do 'output.txt'.

## Komendy do uruchomienia:
Aby uruchomić program wpisz
```bash
node inputToOutput
```
Jeśli chcesz aby program się uruchomił w trybie _watch_ (program będzie uruchamiany za każdym razem kiedy zostanie zmieniony i zapisany) wpisz:
```bash
npm install
```
aby zainstalować zależności z pliku package.json. A następnie:
```bash
npm run start:inputToOutput
```
Aby wyjść z trybu watch wciśnij Ctrl + C.

## Wydarzenia w strumieniach

W pliku emitter.js znajdują się dwa strumienie:

```javascript
const input = __dirname + '/input.txt'
const readStream = fs.createReadStream(input)

const output = __dirname + '/output.txt'
const writeStream = fs.createWriteStream(output)

// your code goes here ...
// readStream.on('nazwaWydarzenia')

readStream
    .pipe(writeStream)
```

Wyloguj do konsoli wiadomość kiedy oba strumienie otrzymają kolejne wydarzenia: pipe, open, close, data.

## Komendy do uruchomienia:
Aby uruchomić program encode wpisz
```bash
node emitter
```
Jeśli chcesz aby program się uruchomił w trybie _watch_ (program będzie uruchamiany za każdym razem kiedy zostanie zmieniony i zapisany) wpisz:
```bash
npm install
```
aby zainstalować zależności z pliku package.json. A następnie:
```bash
npm run start:emitter
```
Aby wyjść z trybu watch wciśnij Ctrl + C.

# CLI do archiwizowania

Stwórzcie program, który będzie potrafił przyjąć trzy argumenty z CLI:

1. nazwę pliku _source_
2. nazwę pliku _target_
3. akcję do wykonania: _compress_ albo _decompress_

## Założenia zadania

Program spakuje plik _package.json_ z aktualnej lokalizacji po wpisaniu:

```bash
node main.js -a compress -s package.json -t compressed
```

Natomiast po wpisaniu poniższej komendy, program wypakuje archiwum do pliku _decompressed.js_.

```bash
node main.js -a decompress -s compressed -t decompressed.js
```

W trakcie działania programu będzie podawał procentowy postęp operacji. Dodatkowo, aplikacja na początku wyloguje informacje jaką operację przeprowadza, _compress_ czy _decompress_, oraz na jakich lokalizacjach operuje. Podobna informacja będzie wyświetlona na samym końcu operacji.

## Z czego należy skorzystać? Jak się do tego zabrać?

Aplikację stwórzmy w dwóch plikach. Pierwszy plik _main.js_ będzie odpowiedzialny za _zadeklarowanie programu CLI_, _walidację żądania użytkownika_ oraz _uruchomienie metody gzipper_ z pliku Gzipper.js.

### main.js

W pierwszej kolejności musicie sprawić, że będziecie w stanie skomunikować się z aplikacją za pomocą Command Line Interface. W tym celu możecie skorzystać z modułu _commander_, o którym dowiedzieliście się w poprzednim module. O tym module dowiesz się więcej [tutaj](https://www.npmjs.com/package/commander). Ważne jest aby aplikacja przyjmowała trzy argumenty, source (_-s_), target(_-t_) i action(_-a_). Na tym rola commandera będzie zakończona.

Następnie musicie upewnić się czy dane wprowadzone przez użytkownika są spójne. W tym celu program musi dokonać walidacji zapytania. Należy sprawdzić, czy użytkownik podał wartości _-s_ oraz _-t_. Ważne jest aby sprawdzić czy ścieżka podana w zmiennej _-s_ wskazuje na plik. Do tego celu należy wykorzystać metodę .fs.existsSync(). Następnie należy sprawdzić, czy użytkownik wprowadził poprawną nazwę akcji, _compress_ albo _decompress_.

Potem trzeba uruchomić funkcję gzipper (do zaimplementowania w pliku Gzipper.js). Jednak już w tym momencie należy uruchomić tę funkcję podając jej różne argumenty w zależności od rodzaju akcji. Aby to zrobić, można skorzystać ze słowa kluczowego _if_ albo _switch_. Należy również zaimportować moduł w pliku _main.js_ oraz wyeksportować go w pliku _Gzipper.js_

### Gzipper.js

Aby móc obliczać procent zaawansowania operacji, musimy wiedzieć jaką wielkość ma podany przez użytkownika plik. W tym celu skorzystajcie z metody _fs.statSync(fileName).size_. Więcej informacji o tej metodzie znajduje się [tutaj](https://nodejs.org/api/fs.html#fs_fs_statsync_path_options).

Aby móc spakować/odpakować plik skorzystajcie z modułu _zlib_. W zależności od akcji użytkownika pod zmienną _gzipAction_ przechowujcie metodę _zlib.createGzip()_ albo _zlib.createGunzip()_. Informacje o module _zlib_ są dostępne [tutaj](https://nodejs.org/api/zlib.html#zlib_zlib).

Stwórz strumień odczytu z pliku podanego przez użytkownika oraz strumień zapisu do scieżki podanej przez użytkownika. Ważna informacja! Jeśli użytkownik kompresuje plik, niech plik ma rozszerzenie _.gz_, w innym razie niech ma rozszerzenie takie jak użytkownik podał.

Dodaj funkcje, które będą uruchamiane kiedy strumień odczytu zostanie otwarty oraz zamknięty. Niech te funkcje logują informacje o samym procesie, np. _Compressing action has started_, albo _Decompressing action has finished_.

Dodaj obsługę wydarzenia _data_, tak aby był przeliczany i wyświetlany postęp operacji.

_Powodzenia!_
