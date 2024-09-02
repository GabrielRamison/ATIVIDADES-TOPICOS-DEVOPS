// Importa o módulo db e o controlador que usa esse db
const { db } = require("../../src/config/db");
const itemController = require("../../src/controllers/item_controller");

// Mocka o módulo db
jest.mock("../../src/config/db", () => ({
  db: {
    select: jest.fn()
  }
}));

describe("Item Controller", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpa os mocks após cada teste
  });

  it("should return all items", async () => {
    const mockItems = [{ id: 1, name: "Item 1", description: "Description 1" }];
    const mockSelect = jest.fn().mockReturnValue({
      from: jest.fn().mockResolvedValue(mockItems)
    });

    db.select = mockSelect;

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    await itemController.getAllItems(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: "Item 1", description: "Description 1" }]);
    db.select.mockRestore();
  });
});
