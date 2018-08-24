export default {
	html: `<textarea></textarea>`,
	test (assert, component, target) {
		const textarea = target.querySelector('textarea');
		assert.ok(textarea.hasAttribute('foo') === false);
	},
};