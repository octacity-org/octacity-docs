"""OmniShip delivery pipeline for Octacity Docs."""

from omniship import Pipeline
from omniship.plugins.bun import Bun, BunBuild, BunToolchain
from omniship.plugins.github import GitHubActions, GitHubPages

github = GitHubActions()
pipeline = Pipeline(targets=[github])
bun = BunToolchain(version="1.4.2")


@pipeline.check
def check(stage):
    @stage.task(requires=[bun])
    def validate_site(ctx):
        runner = Bun(ctx)
        runner.install()
        runner.build(script="typecheck")
        runner.build()


@pipeline.build
def build(stage):
    stage.task(
        BunBuild(artifacts=("build",)),
        requires=[bun],
    )


@pipeline.ship
def ship(stage):
    stage.task(GitHubPages(artifact="build"))
