
SITE=_site
GH_PAGES=gh-pages
BASE_URL=/pcaweb
JEKYLL_FLAGS=--no-auto --no-server --base-url $(BASE_URL)

all : pcaweb

pcaweb :
	jekyll $(JEKYLL_FLAGS)

master :
	git add . && git commit -a && git push origin master

gh-pages : pcaweb
	cp -rp $(SITE)/* $(GH_PAGES)/ && cd $(GH_PAGES)/
	git add . && git commit -a && git push origin gh-pages

.PHONE : all pcaweb master gh-pages
