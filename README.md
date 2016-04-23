# Local-doc

Local-doc is a local readme viewer for all readmes located in a node js node_module folder

### Version
1.0.2

### Installation

You need local-doc installed locally in your node_modules folder

```sh
$ npm install local-doc --save
```

### Running

By default local-doc setups a server running on port 3000. To access it navigate to localhost:3000

```sh
$ node node_modules/local-doc/bin/www
```

If you would like to changed the port then use an environment variable

```sh
$ PORT=8080 node node_modules/local-doc/bin/www
```
The code above will make local-doc be available at localhost:8080

### Todos

 - Write Tests
 - Integrate node js global folder

License
----

MIT
