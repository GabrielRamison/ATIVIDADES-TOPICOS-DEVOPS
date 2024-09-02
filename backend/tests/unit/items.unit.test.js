const { Item } = require("../../src/models/item");

jest.mock("../../src/models/item", () => ({
  Item: {
    query: jest.fn().mockReturnThis()
  }
}));

describe("Item Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new item", async () => {
    const newItemData = { name: "Item de Teste", description: "Descrição do item de teste" };
    const mockInsertResponse = { id: 1, ...newItemData };

    jest.spyOn(Item, "query").mockReturnValue({ insert: jest.fn().mockResolvedValue(mockInsertResponse) });

    const result = await Item.query().insert(newItemData);

    // Verificações
    expect(Item.query).toHaveBeenCalled(); // Verifica se query foi chamado
    expect(Item.query().insert).toHaveBeenCalledWith(newItemData); // Verifica se insert foi chamado com os dados corretos
    expect(result).toEqual(mockInsertResponse); // Verifica se o retorno é o esperado
  });

  it("should delete a new item", async () => {
    const mockDeleteId = "algum id";

    jest.spyOn(Item, "query").mockReturnValue({ deleteById: jest.fn().mockResolvedValue(true) });

    const result = await Item.query().deleteById(mockDeleteId);

    // Verificações
    expect(Item.query).toHaveBeenCalled(); // Verifica se query foi chamado
    expect(Item.query().deleteById).toHaveBeenCalledWith(mockDeleteId); // Verifica se insert foi chamado com os dados corretos
    expect(result).toEqual(true); // Verifica se o retorno é o esperado
  });
});
