# the_local_de_free

A very simple Firefox extension for reading premium articles in the [thelocal.de](http://www.thelocal.de).

**PSA: If you can please support your favorite websites or at least whitelist them from your ad-blocker. Thank you**

DISCLAIMER: I do not condone nor encourage the use.... ah who I am kidding? Information should be free!

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

Then open [about:addons](about:addons) in Firefox, click the gearbox icon to get the drop-down menu and select **Install Add-on from File**, finally select the generated zip file. That's it!

Now enjoy the articles for free (while you can) from this excellent website.
