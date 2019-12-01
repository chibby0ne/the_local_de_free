# the_local_de_free

A very simple firefox extension for reading premium articles in the [thelocal.de](http://www.thelocal.de).


## To install

To build the plugin you need to install [web-ext](https://github.com/mozilla/web-ext), which can be installed from `npm` with:

```
npm install --global web-ext
```

After you have web-ext installed, simply run build subcommand in this directory:

```
web-ext build
```

This will package the extension as a `.zip` file in a directory named `web-ext-artifacts/`. 

Then open [about:addons](about:addons) in Firefox, click the gearbox icon to get the dropdown menu and select **Install Add-on from File**, finally select the generated zipfile. That's it!

Now enjoy the articles for free (while you can) from this excellent website.
