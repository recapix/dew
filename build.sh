#!/usr/bin/env bash

#exit if any command fails
set -e

artifactsFolder="./artifacts"

if [ -d $artifactsFolder ]; then  
  rm -R $artifactsFolder
fi

dotnet restore

# Ideally we would use the 'dotnet test' command to test netcoreapp and net451 so restrict for now 
# but this currently doesn't work due to https://github.com/dotnet/cli/issues/3073 so restrict to netcoreapp

dotnet test test/test.csproj -c Release -f netcoreapp2.0

revision=${TRAVIS_JOB_ID:=1}  
revision=$(printf "%04d" $revision) 

dotnet build ./src/AdminProj.csproj -c Release --framework netcoreapp2.0

dotnet pack ./src/AdminProj.csproj -c Release -o ../artifacts --version-suffix=$revision


