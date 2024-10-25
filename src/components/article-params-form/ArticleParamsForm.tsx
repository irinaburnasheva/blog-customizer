import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';

import {
	OptionType,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	ArticleStateType,
} from '../../constants/articleProps';

import {  SyntheticEvent, useState } from 'react';
import { forceReRender } from '@storybook/react';
import clsx from 'clsx';

type TArticleParamsFormProps = {
	pageState?: ArticleStateType;
	setPageState: (state: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: TArticleParamsFormProps) => {
	const { setPageState } = props;

	const [formState, setFormState] = useState(defaultArticleState);

	const [openForm, setOpenForm] = useState(false);

	const changeHandler = (name: string) => (value: OptionType) => {
			setFormState({
				...formState,
				[name]: value,
			});
	};

	const submitHandler = (e: SyntheticEvent) => {
		e.preventDefault();

		setPageState(formState);

		setOpenForm(false);
	};

	function resetToDefaultHandler(e: SyntheticEvent) {
		e.preventDefault();

		setFormState(defaultArticleState);
		setPageState(defaultArticleState);

		setOpenForm(false);
	}

	return (
		<>
			<ArrowButton
				onClick={() => setOpenForm(!openForm)}
				isOpenArticleParamsForm={openForm}
			/>
			<aside
				className={
					openForm
						? clsx([styles.container_open, styles.container])
						: styles.container
				}>
				<form
					className={clsx([styles.form, styles.articleForm])}
					onSubmit={submitHandler}
					onReset={resetToDefaultHandler}>
					<Text weight={800} size={31} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						name='fontFamilyOption'
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={changeHandler('fontFamilyOption')}></Select>
					<RadioGroup
						title='Размер шрифта'
						name='fontSizeOption'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={changeHandler('fontSizeOption')}></RadioGroup>
					<Select
						title='Цвет шрифта'
						name='fontColor'
						options={fontColors}
						selected={formState.fontColor}
						onChange={changeHandler('fontColor')}></Select>
					<Separator></Separator>
					<Select
						title='Цвет фона'
						name='backgroundColor'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={changeHandler('backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						name='contentWidth'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={changeHandler('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
