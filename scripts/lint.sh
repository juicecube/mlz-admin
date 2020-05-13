#!/usr/bin/env bash

set -xe

npx eslint --ext tsx,ts,js src --fix && tsc --project tsconfig.json --outDir .tsc-check/
