/**
 * Components
 */

type ButtonType = {
  children?: ReactNode;
  screenName?: string;
  onPress?: () => void;
};

type ProductType = {
  item: ProductInterface;
};

interface ProductInterface {
  id: number;
  name: string;
}
