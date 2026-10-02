"""OmniShip delivery pipeline for Octacity Docs."""

from omniship import Pipeline
from omniship.plugins.bun import BunBuild, BunToolchain
from omniship.plugins.github import GitHubActions, GitHubPages

github = GitHubActions()
pipeline = Pipeline(targets=[github])
bun = BunToolchain(version="1.2.4")


@pipeline.build
def build(stage):
    stage.task(
        BunBuild(artifacts=("build",)),
        requires=[bun],
    )


@pipeline.ship
def ship(stage):
    stage.task(GitHubPages(artifact="build"))
