const template = `
There were the following issues with this Pull Request

<PLACEHOLDER>

You may need to [change the commit messages][ref] to comply with the \
repository contributing guidelines.

--------

🤖 This comment was generated by [**commitlint[bot]**][repo]. Please report \
issues [here][issues].

Happy coding!

[ref]: https://help.github.com/articles/changing-a-commit-message/
[repo]: https://github.com/ahmed-taj/commitlint-bot
[issues]: https://github.com/ahmed-taj/commitlint-bot/issues
`

/**
 * Formats array of commits warnings/errors as GitHub comment
 *
 * @param {Array} report
 */
function format(commits) {
	let message = ''

	commits.forEach(c => {
		message += `* Commit: ${c.sha}\n`
		message += c.errors.map(e => `  - ✖ ${e.message}\n`)
		message += c.warnings.map(w => `  - ⚠ ${w.message}\n`)
	})

	return template.replace('<PLACEHOLDER>', message)
}

module.exports = format
