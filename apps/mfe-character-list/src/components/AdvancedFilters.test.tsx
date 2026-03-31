import { render, screen, fireEvent } from "@testing-library/react";
import { AdvancedFiltersModal } from "../components/AdvancedFilters";

describe("AdvancedFilters", () => {
  it("renderiza y aplica filtros", () => {
    const mockOnAplicar = jest.fn();
    render(
      <AdvancedFiltersModal
        isOpen={true}
        onClose={() => {}}
        valoresIniciales={{ especie: [], genero: [], estado: [] }}
        onAplicar={mockOnAplicar}
      />
    );

    fireEvent.click(screen.getByText("Aplicar filtros"));
    expect(mockOnAplicar).toHaveBeenCalled();
  });
});
