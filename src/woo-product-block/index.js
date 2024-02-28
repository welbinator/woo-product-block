import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';

registerBlockType('woo-product-block/woocommerce-product-block', {
    apiVersion: 2,
    title: 'WooCommerce Product Block',
    description: 'A block for creating WooCommerce products.',
    category: 'widgets',
    icon: 'cart',
    supports: {
        html: false,
    },
    edit: Edit,
    save() {
        // Your block will use a dynamic rendering approach, so return null
        return null;
    },
});
