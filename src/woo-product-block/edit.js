import { __ } from '@wordpress/i18n';
import { Placeholder } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <Placeholder
                icon="admin-post"
                label={__('WooCommerce Product Form', 'woo-product-block')}
                instructions={__('Product form will display here on the frontend.', 'woo-product-block')}
            />
        </div>
    );
};

export default Edit;
