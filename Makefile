
PROJ=pcaweb
SITE=_site
GH_PAGES=../gh-pages/
BASE_URL=/pcaweb
JEKYLL_FLAGS=--no-auto --no-server --base-url $(BASE_URL)

all : $(PROJ)

$(PROJ) :
	jekyll $(JEKYLL_FLAGS)

gh-pages : $(PROJ)
	cp -rp $(SITE)/* $(GH_PAGES)

.PHONE : all $(PROJ) gh-pages
