ROOT = $(PWD)
SS_ROOT = $(PWD)/public

watch:
	cd public/mysite; npm run watch --development

db:
	cd "$(SS_ROOT)" && php ./framework/cli-script.php dev/build flush=1
flush:
	rm -rf "$(SS_ROOT)/silverstripe-cache" && mkdir "$(SS_ROOT)/silverstripe-cache"
cleandb:
	cd "$(SS_ROOT)" && php ./framework/cli-script.php dev/tests/cleanupdb
