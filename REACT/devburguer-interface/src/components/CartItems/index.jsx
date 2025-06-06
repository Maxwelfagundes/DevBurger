import TrashIcon from '../../assets/trash.svg';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Table } from '../index';
import {
  ButtonGroup,
  EmptyCart,
  ProducTotalPrice,
  ProductImage,
  TrashImage,
} from './styles';

export function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct, deletProduct } =
    useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th> </Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preços</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th> </Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.urL} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button
                    type="button"
                    onClick={() => decreaseProduct(product.id)}>
                    -
                  </button>

                  {product.quantity}

                  <button
                    type="button"
                    onClick={() => increaseProduct(product.id)}>
                    +
                  </button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <ProducTotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </ProducTotalPrice>
              </Table.Td>
              <Table.Td>
                <TrashImage
                  src={TrashIcon}
                  alt="lixeira"
                  onclick={() => deletProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
}
