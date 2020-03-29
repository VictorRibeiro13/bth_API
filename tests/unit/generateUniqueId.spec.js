const generateUniqueID = require('../../src/utils/generateUniqueId')

describe("genereate unique id", () => {
    it('should generate a unique id', ()=> {
        const id = generateUniqueID();
        expect(id).toHaveLength(8);
    })
})