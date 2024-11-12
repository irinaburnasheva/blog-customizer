import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Тип для обработки открытия/закрытия формы */
export type TArrowButtonProps = {
	onClick: () => void;
	isOpenArticleParamsForm: boolean;
};

export const ArrowButton = ( props: TArrowButtonProps ) => {
	const { onClick, isOpenArticleParamsForm } = props;

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={
				isOpenArticleParamsForm
					? clsx([styles.container, styles.container_open])
					: styles.container
			}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={
					isOpenArticleParamsForm
						? clsx([styles.arrow, styles.arrow_open])
						: styles.arrow
				}
			/>
		</div>
	);
};