# moka-site

The website for [Moka](https://github.com/openVESSL/Moka), at <https://moka.openvessl.com>.

Plain [Astro](https://astro.build), no client-side JavaScript.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static files in dist/
```

The Docker image builds the site and serves it with nginx on port 80:

```sh
docker build -t moka-site .
docker run --rm -p 8080:80 moka-site
```

## License

GPL-3.0. See [LICENSE](LICENSE).
