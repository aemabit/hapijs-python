## Hapi JS Server

* Base server @hapi/hapi js.
* PythonShell integration.
* NLTK to process the sentiments on a text.

### Requeriments

* python^2.6
* pip
* nodejs

### Usage

* npm i
* npm run dev ```Works in http://localhost:5500```
* send a ```post``` request to ```http://localhost:5500/pyprocess```
* payload: ```tweet``` : ```Sandstorm is a masterpiece```
* await response

#### Sample Response
```
[
  "{'neg': 0.0, 'neu': 0.328, 'pos': 0.672, 'compound': 0.6249}"
]
```
