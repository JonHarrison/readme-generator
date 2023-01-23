import { licenses } from '../utils/licenses.js';

test('Badges', () => {
    const choices = licenses.getChoices();
    for (let choice of choices) {
        let badge = licenses.makeBadge(choice.name);
        if (licenses.isLicensed(choice.name)) {
            expect(badge).not.toBe(undefined);
        }
        else {
            expect(badge).toBe('');
        }
    }
    expect( licenses.isLicensed('a made up license') ).toBe(false);
    expect( licenses.makeBadge('a made up license') ).toBe(undefined);
});
