import { licenses } from '../utils/licenses.js';

describe('Badges - defined', () => {
    const choices = licenses.getChoices();
    for (let choice of choices) {
        let badge = licenses.makeBadge(choice.name);
        if (licenses.isLicensed(choice.name)) {
            it(`the license '${choice.name}' should have a badge`, () => {
                expect(badge).not.toBe(undefined);
            })
        }
        else {
            it(`the license '${choice.name}' should not have a badge`, () => {
                expect(badge).toBe('');
            })
        }
    }
});

describe('Badges - undefined', () => {
    it('isLicensed should return false with a made up license', () => {
        expect( licenses.isLicensed('a made up license') ).toBe(false);
    });
    it('madeBadge should return undefined with a made up license', () => {
        expect( licenses.makeBadge('a made up license') ).toBe(undefined);

    });
})