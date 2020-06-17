import classNames from 'classnames';
import Typography from '@components/Typography';
import useStyles from './style';

export default ({
    data = [],
}) => {
    const styles = useStyles();
    const list = data.reverse();
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {
                    list.map((item, index) => (
                        <li
                            key={index}
                            className={
                                classNames(styles.itemContainer, item.owner_type === 2 ? styles.right : styles.left)
                            }
                        >
                            <div className="column">
                                <Typography type="bold">
                                    {item.owner_type === 2 ? `${item.owner_name} (Me)` : '(Customer Service)'}
                                    {' '}
                                    {item.created_at}
                                </Typography>
                                <Typography>
                                    {item.text}
                                </Typography>
                                {
                                    item.attachments.length > 0 && item.attachments.map((file, ind) => (
                                        <a key={ind} href={file.image_url} target="blank">
                                            <Typography decoration="underline">
                                                {file.name}
                                            </Typography>
                                        </a>
                                    ))
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
